import React from "react";
import { Table } from "rsuite";

const { Column, HeaderCell, Cell } = Table;

const RenderRowExpanded = ({ rowData }) => {
  console.log("PartsData", rowData?.order_parts?.length);
  return (
    <Table
      showHeader
      bordered
      height={800}
      data={rowData?.order_parts}
      // onRowClick={(rowData) => {
      //   console.log(rowData);
      // }}
    >
      <Column width={150}>
        <HeaderCell>Material arrival date</HeaderCell>
        <Cell dataKey="material_arrival_date" />
      </Column>

      <Column width={150}>
        <HeaderCell>Material quantity</HeaderCell>
        <Cell dataKey="material_quantity" />
      </Column>

      <Column width={150}>
        <HeaderCell>Processing Data</HeaderCell>
        <Cell dataKey="part_source" />
      </Column>

      <Column width={150}>
        <HeaderCell>Part Number</HeaderCell>
        <Cell dataKey="part_number" />
      </Column>

      <Column width={150}>
        <HeaderCell>Part Name</HeaderCell>
        <Cell dataKey="part_name" />
      </Column>

      <Column width={150}>
        <HeaderCell>Part Relation</HeaderCell>
        <Cell dataKey="part_relation" />
      </Column>

      <Column width={150}>
        <HeaderCell>Delivery Date</HeaderCell>
        <Cell dataKey="delivery_date" />
      </Column>

      <Column width={150}>
        <HeaderCell>Number Of Deliveries</HeaderCell>
        <Cell dataKey="number_of_deliveries" />
      </Column>

      <Column width={150}>
        <HeaderCell>Completion Sign</HeaderCell>
        <Cell dataKey="completion_sign" />
      </Column>
    </Table>
  );
};

export default RenderRowExpanded;
