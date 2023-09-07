import BookListing from "../book-listing/book-listing.component";
import Button from "../button/button.component";
import LibraryBookListing from "../library-book-listing/library-book-listing.component";
import "./book-list.styles.scss";

function BookList ({ books, onClick }) {

	return (
		<ul>
			{
				books && books.map(book => {
					return(
						<LibraryBookListing bookId={ book } onClick={ onClick }/>
					)
				})
			}
		</ul>
	)
}
export default BookList;