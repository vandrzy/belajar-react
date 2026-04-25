

interface Props {
    currentPage: number;
    totalPage: number;
    onChangePage: (page: number) => void
}

const Pagination = ({currentPage, onChangePage, totalPage}: Props) =>{
    return (
        <div className="flex gap-3 items-center">
            <button onClick={() => onChangePage(currentPage - 1)}>Prev</button>
            <p>Page {currentPage} of {totalPage}</p>
            <button onClick={() => onChangePage(currentPage + 1)}>Next</button>
        </div>
    )
}

export default Pagination;