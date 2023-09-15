import useSWR from "swr";

import fetcher from "@/libs/fetcher";

const useGuides = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/guides", fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useGuides;
