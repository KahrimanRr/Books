import { useOktaAuth } from "@okta/okta-react";
import { useEffect, useState } from "react";
import HistoryModel from "../../../models/HistoryModel";
import { error } from "console";
import { SpinnerLoading } from "../../../Utils/SpinnerLoading";

export const HistoryPafe = () => {
  const { authState } = useOktaAuth();
  const [isLoadingHistory, setIsLoadingHistory] = useState(true);
  const [httpError, setHttpError] = useState(false);
  //History
  const [history, setHistories] = useState<HistoryModel[]>([]);

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchHistory = async () => {
      if (authState && authState?.isAuthenticated) {
        const url = `http://localhost:8080/api/histories/search/findBooksbyUserEmail/?userEmail=${
          authState.accessToken?.claims.sub
        }&page=${currentPage - 1}$size=5`;
        const requestOptions = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${authState.accessToken?.accessToken}`,
            "Content-Type": "application/json",
          },
        };
        const historyResponse = await fetch(url, requestOptions);
        if (!historyResponse.ok) {
          throw new Error("Something went wrong with history");
        }
        const historyResponseJson = await historyResponse.json();
        setHistories(historyResponseJson._embedded.histories);
        setTotalPages(historyResponseJson.page.totalPages);
      }
      setIsLoadingHistory(false);
    };
    fetchHistory().catch((error: any) => {
      setIsLoadingHistory(false);
      setHttpError(error.message);
    });
  }, [authState, currentPage]);

  if (isLoadingHistory) {
    return <SpinnerLoading />;
  }

  if (httpError) {
    return (
      <div className="container m-5">
        <p>{httpError}</p>
      </div>
    );
  }

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return <div className="mt-2">
    {history.length > 0 ? 
    <>
    </>}
    
  </div>;
};
