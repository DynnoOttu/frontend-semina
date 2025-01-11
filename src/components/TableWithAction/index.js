import React from "react";
import { Table } from "react-bootstrap";
import Thead from "../Thead";
import TbodyWithAction from "../TbodyWithAction";

function TableWithAction({
  withoutPagination,
  handlePageClick,
  actionNotDisplay,
  data,
  thead,
  tbody,
  editUrl,
  deleteAction,
  customAction,
  status,
  pages,
}) {
  return (
    <>
      <Table>
        <Thead text={thead} />
        <TbodyWithAction
          status={status}
          data={data}
          display={tbody}
          editUrl={editUrl}
          deleteAction={deleteAction}
          actionNotDisplay={actionNotDisplay}
          customAction={customAction}
        />
      </Table>
      {withoutPagination && data.length ? <></> : ""}
    </>
  );
}

export default TableWithAction;
