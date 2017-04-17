export function selectBook(book) {
    // selectBook needs to return an action
    // an object with a type property
    return {
      type: 'BOOK_SELECTED',
      payload: book
    };
}