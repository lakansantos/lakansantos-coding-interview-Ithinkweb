const Pagination = ({rowsPerPage, totalRows, setCurrentPage, currentPage}) => {
    let pages = [];


    for(let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++){
        pages.push(i)
    }
    return(
        <div className="pagination-page">
            {pages.map((page, index) => {
                return (
                    <button key={index} 
                    onClick={() => setCurrentPage(page)}
                    className={page === currentPage ? 'activeButtons' : 'pageButton'}
                    >
                    {page}
                    </button>
                )
            })
            }
        </div>
    )

}


export default Pagination;