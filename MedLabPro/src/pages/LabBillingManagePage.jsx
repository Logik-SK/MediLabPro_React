import ContentWrapper from "../components/layout/ContentWrapper";
import TableWrapper from "../components/Table/TableWrapper"; // updated wrapper
import TableContainer from "../components/Table/TableContainer";
import { billingTableConfig } from "../config/billingTableConfig";
import useBillingTable from "../hooks/useBillingTable";

const LabBillingManagePage = () => {
  const { title, subtitle, ...tableProps } = useBillingTable(billingTableConfig);

  return (
    <ContentWrapper>
      <TableWrapper title={title} subtitle={subtitle}>
        <TableContainer {...tableProps} />
      </TableWrapper>
    </ContentWrapper>
  );
};

export default LabBillingManagePage;
