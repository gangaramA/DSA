var merge = function(nums1, m, nums2, n) {
    // Start from the end of both arrays
    let i = m - 1; // Pointer for the last element in the original nums1
    let j = n - 1; // Pointer for the last element in nums2
    let k = m + n - 1; // Pointer for the last position in nums1

    // Merge the arrays while both nums1 and nums2 have elements to compare
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i]; // Place the larger element at the end of nums1
            i--;
        } else {
            nums1[k] = nums2[j]; // Place the larger element at the end of nums1
            j--;
        }
        k--;
    }

    // If there are any remaining elements in nums2, copy them into nums1
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }

    // If there are any remaining elements in nums1, they are already in place
};