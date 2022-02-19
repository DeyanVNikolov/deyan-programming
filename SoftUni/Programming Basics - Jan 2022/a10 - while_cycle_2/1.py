searched_book = input()
books_counter = 0
no_more_books = False
next_book = input()
while next_book != searched_book:
    if next_book == "No More Books":
        no_more_books = True
        break
    books_counter += 1
    next_book = input()
if no_more_books:  # if book_is_found == True
    print("The book you search is not here!")
    print(f"You checked {books_counter} books.")
else:
    print(f"You checked {books_counter} books and found it.")