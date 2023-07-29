import { Link, Redirect } from "expo-router";

export default function Page() {
  return <Redirect href={"/admin/view_invoice"} />;
}
