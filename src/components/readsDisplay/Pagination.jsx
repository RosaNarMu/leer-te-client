
export const Pagination = ({ postsPerPage, totalPosts, setCurrentPage }) => {
    let pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

    return (
        <nav>
            <div className='pagination-container'>
                {pageNumbers.map(number => (
                    <div key={number} className='pagination-number'>
                        <button className='btn' onClick={() => paginate(number)}>
                            {number}
                        </button>
                    </div>
                ))}
            </div>
        </nav>
    )
}

