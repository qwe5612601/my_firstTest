function binarySearch(items, value) {
    var startIndex = 0;
    var stopIndex = items.length - 1;
    var middle = Math.floor((startIndex + stopIndex) / 2);
    while (items[middle] != value && startIndex < stopIndex) {
        if (value < items[middle]) {
            stopIndex = middle - 1;
        } else if (value > items[middle]) {
            startIndex = middle + 1;
        }
        middle = Math.floor((stopIndex + startIndex) / 2);
    }
    return (items[middle] != value ? -1 : middle);
}