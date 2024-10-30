"use client";

import { Button } from "@/components/button";
import { useRouter } from "next/navigation";
import { createUser, getUsers, login } from "./_tests";
import { DataTable } from "@/components/data-table";
import { createDataTableColumns } from "@/components/utils/create-data-table-columns";
import { User } from "@/models/user-model";

export default async function Home() {
  const router = useRouter();

  const handleCreateUser = async () => {
    const aaa = await createUser();

    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log(aaa);
  };

  const handleClick = async () => {
    const aaa = await login();

    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log(aaa);
  };

  const handleRedirect = () => {
    router.push("components");
  };

  const columns = createDataTableColumns<User>([
    { key: "id", title: "ID" },
    { key: "name", title: "Name" },
    { key: "email", title: "Email" },
    { key: "googleId", title: "Google ID" },
  ]);

  const data = await getUsers();

  return (
    <div className="space-y-4 p-4">
      <div>
        <Button onClick={handleRedirect}>Components</Button>
      </div>

      <div className="space-x-2">
        <Button onClick={handleCreateUser}> USER </Button>
        <Button onClick={handleClick}> SESSION </Button>
      </div>
      <DataTable
        columns={columns}
        data={data}
      />
    </div>
  );
}
