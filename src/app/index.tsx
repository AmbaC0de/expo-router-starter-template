import { useAppSelector } from "@/store/hooks";
import { selectAuth } from "@/store/slices/auth";
import { Redirect } from "expo-router";

export default function Index() {
  const { isAuthenticated } = useAppSelector(selectAuth);

  if (isAuthenticated) return <Redirect href="/(protected)" />;

  return <Redirect href="/sign-in" />;
}
