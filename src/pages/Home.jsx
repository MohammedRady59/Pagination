import { useQuery } from "@tanstack/react-query";
import axiosInastance from "../config/axiosInastance";
import { memo, useState } from "react";
import Loading from "../components/UI/Loading";

// eslint-disable-next-line react/prop-types
function Home({ id }) {
  const [after, setAfter] = useState("null");
  const { isPending, data } = useQuery({
    queryKey: ["items", id, `${after}`],
    queryFn: async () => {
      const res = await axiosInastance.get(
        `/${id}.json?after=${after}&limit=10`
      );
      return res.data;
    },
    enabled: !!id,
  });

  if (isPending) return <Loading />;
  function handleAfter() {
    setAfter(data.data.after);
  }
  console.log(data);
  return (
    <>
      <div className="mt-24 container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.data.children.map((el, idx) => (
          <div
            key={idx}
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {el.data.author}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {el.data.title}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <div className="flex">
          {/* Previous Button */}
          <a
            onClick={() => setAfter("null")}
            href="#"
            className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            First Page
          </a>
          {/* Next Button */}
          <a
            onClick={() => handleAfter()}
            href="#"
            className="flex items-center justify-center px-4 h-10 ms-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </a>
        </div>
      </div>
    </>
  );
}

export default memo(Home);
