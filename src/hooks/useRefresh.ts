import { HapticManager } from "@/utils/haptics";
import { useCallback, useState } from "react";

interface UseRefreshProps {
  isFetching: boolean;
  isUninitialized: boolean;
   
  refetch: () => Promise<any>;
}

export const useRefresh = ({
  isFetching,
  isUninitialized,
  refetch,
}: UseRefreshProps) => {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = useCallback(async () => {
    if (isFetching) return;

    if (!isUninitialized) {
      try {
        HapticManager.selection();
        setRefreshing(true);
        await refetch();
      } finally {
        setRefreshing(false);
      }
    }
  }, [isUninitialized, isFetching, refetch]);

  return {
    refreshing,
    onRefresh,
  };
};
