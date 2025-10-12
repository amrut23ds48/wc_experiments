#include <stdio.h>

void displayArray(int arr[], int size) {
    if (size == 0) {
        printf("Array is empty.\n");
        return;
    }
    printf("Array elements are: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int insertElement(int arr[], int size, int element, int position, int capacity) {
    if (size >= capacity) {
        printf("Error: Array is full. Cannot insert.\n");
        return size;
    }
    if (position < 1 || position > size + 1) {
        printf("Error: Invalid position for insertion.\n");
        return size;
    }

    for (int i = size - 1; i >= position - 1; i--) {
        arr[i + 1] = arr[i];
    }

    arr[position - 1] = element;

    return size + 1;
}

int deleteElement(int arr[], int size, int position) {
    if (size <= 0) {
        printf("Error: Array is empty. Cannot delete.\n");
        return size;
    }
    if (position < 1 || position > size) {
        printf("Error: Invalid position for deletion.\n");
        return size;
    }

    for (int i = position - 1; i < size - 1; i++) {
        arr[i] = arr[i + 1];
    }

    return size - 1;
}

int main() {
    int arr[100] = {10, 20, 30, 40, 50};
    int size = 5;
    int capacity = 100;
    int choice, element, position;

    do {
        printf("\n--- Array Operations Menu ---\n");
        displayArray(arr, size);
        printf("1. Insert an element\n");
        printf("2. Delete an element\n");
        printf("3. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter the element to insert: ");
                scanf("%d", &element);
                printf("Enter the position to insert at (1 to %d): ", size + 1);
                scanf("%d", &position);
                size = insertElement(arr, size, element, position, capacity);
                break;

            case 2:
                printf("Enter the position to delete from (1 to %d): ", size);
                scanf("%d", &position);
                size = deleteElement(arr, size, position);
                break;

            case 3:
                printf("Exiting program.\n");
                break;

            default:
                printf("Invalid choice. Please try again.\n");
        }

    } while (choice != 3);

    return 0;
}

