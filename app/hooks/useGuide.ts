import useSWR from "swr";

import fetcher from "@/libs/fetcher";

const useGuide = (guideId: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    guideId ? `/api/guides/${guideId}` : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useGuide;
