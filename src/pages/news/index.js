import { Button } from "antd";
import Link from "next/link";

const NewsHomePage = () => {
  return (
    <div>
      <h1>This is news home page</h1>
      <Button type="primary">
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
};

export default NewsHomePage;
