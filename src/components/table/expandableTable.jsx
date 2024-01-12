import React, { useState } from "react";
import { Button, IconButton, Table } from "rsuite";
import RenderRowExpanded from "./renderRowExpanded";
import { data } from "./mockData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

const { Column, HeaderCell, Cell } = Table;

const rowKey = "id";

const renderRowExpanded = (rowData) => {
  return <RenderRowExpanded rowData={rowData} />;
};

const ExpandCell = ({
  rowData,
  dataKey,
  expandedRowKeys,
  onChange,
  ...props
}) => {
  return (
    <Cell {...props} style={{ padding: 5 }}>
      <IconButton
        appearance="subtle"
        onClick={() => {
          onChange(rowData);
        }}
        icon={
          expandedRowKeys.some((key) => key === rowData[rowKey]) ? (
            <>
              {rowData[dataKey]}
              <FontAwesomeIcon icon={faCaretUp} />
            </>
          ) : (
            <>
              {rowData[dataKey]}
              <FontAwesomeIcon icon={faCaretDown} />
            </>
          )
        }
      />
    </Cell>
  );
};

const ExpandableTable = () => {
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);

  const handleOpenAllEvents = () => {
    const newExpandedRowKeys = [];
    data.map((item) => {
      newExpandedRowKeys.push(item?.id);
    });
    setExpandedRowKeys(newExpandedRowKeys);
  };

  const handleCloseAllEvents = () => {
    setExpandedRowKeys([]);
  };
  
  const handleExpanded = (rowData) => {
    let open = false;
    const nextExpandedRowKeys = [];
    expandedRowKeys.forEach((key) => {
      if (key === rowData[rowKey]) {
        open = true;
      } else {
        nextExpandedRowKeys.push(key);
      }
    });
    if (!open) {
      nextExpandedRowKeys.push(rowData[rowKey]);
    }
    setExpandedRowKeys(nextExpandedRowKeys);
  };

  console.log('ORDERDATA',data);
  return (
    <>
      <Button onClick={handleOpenAllEvents}>Open All Events</Button>
      <Button onClick={handleCloseAllEvents}>Close All Events</Button>
      <Table
        height={600}
        data={data}
        rowKey={rowKey}
        expandedRowKeys={expandedRowKeys}
        onRowClick={(data) => {
          console.log(data);
        }}
        renderRowExpanded={renderRowExpanded}
        rowExpandedHeight={200}
      >
        <Column width={150}>
          <HeaderCell>Alert Function</HeaderCell>
          <Cell dataKey="alertFunction" />
        </Column>

        <Column width={150}>
          <HeaderCell>Order Number</HeaderCell>
          <Cell dataKey="order_no" />
        </Column>

        <Column width={150}>
          <HeaderCell>Event Progress</HeaderCell>
          <Cell dataKey="event_progress" />
        </Column>

        <Column width={150}>
          <HeaderCell>Customer Name</HeaderCell>
          <Cell dataKey="customer_name" />
        </Column>
        <Column width={150}>
          <HeaderCell>Event Name</HeaderCell>
          <ExpandCell
            expandedRowKeys={expandedRowKeys}
            onChange={handleExpanded}
            dataKey="event_name"
          />
        </Column>
        <Column width={150}>
          <HeaderCell>Order Type</HeaderCell>
          <Cell dataKey="order_type" />
        </Column>
      </Table>
    </>
  );
};

export default ExpandableTable;
