import { Container, Pagination } from 'semantic-ui-react';


function ProductPagination({ totalPages }) {
  return (
    <Container textAlign="center" style={{margin: '2em'}} >
      <Pagination
        defaultActivePage={1}
        totalPages={totalPages}
        onPageChange={(event, data) => {
          e
        }}
      />
    </Container>
  );
}

export default ProductPagination;
