
export default function PaginationTests({postPerPage, totalPosts, setCurrentPage, currentPage}) {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
      <div>
        {pageNumbers.map((page, index) => {
            return <button key={index} onClick={() => setCurrentPage(page)}>{page}</button>
        })}
      </div>
    )
  }