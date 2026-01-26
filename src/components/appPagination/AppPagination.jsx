import { Pagination, Skeleton } from '@mui/material';
// color: primary, secondary
// variant: outlined
// shape: rounded
// size: small, large

const AppPagination = (props) => {

  const handleChange = (event, page) => {
    if(event?.type === "click"){
      props?.handlePagination({type: "handlePage", value: page});
    }
  };

  return (
    <>
        <Pagination count={props?.count} color={props?.color} variant={props?.variant} shape={props?.shape} size={props?.size} onChange={handleChange} page={props?.page || 1}/>
    </>
  )
}

export const AppPaginationLoader = () => {
  return (
    <div style={{display: "flex", flexDirection: "row", gap: "10px"}}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="circular" width={40} height={40} />
    </div>
  )
}

export default AppPagination;