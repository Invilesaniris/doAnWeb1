function nameOptionChecked(){
    //sessionStorage.setItem("option", "name");
    let search_product_name=document.getElementById("search-product");
    let search_product_type=document.getElementById("search-product-type");
    search_product_name.style.display="block";
    search_product_type.style.display="none";

}
function typeOptionChecked(){
    //sessionStorage.setItem("option", "type");
    let search_product_name=document.getElementById("search-product");
    let search_product_type=document.getElementById("search-product-type");
    search_product_name.style.display="none";
    search_product_type.style.display="block";
}
document.addEventListener('DOMContentLoaded', function() {
    const searchByName = document.getElementById("search-product");
    const searchByType = document.getElementById("search-product-type");

    const searchOption = document.getElementsByName("option");
    for (let i = 0; i < searchOption.length; i++) {
        searchOption[i].addEventListener('change', function() {
            if (searchOption[i].checked && searchOption[i].value === 'name') {
                searchByName.style.display = "block";
                searchByType.style.display = "none";
            } else if (searchOption[i].checked && searchOption[i].value === 'type') {
                searchByType.style.display = "block";
                searchByName.style.display = "none";
            }
        });
    }

    function submitSearch() {
        const searchResult = document.getElementById("search-result");
        searchResult.style.display = "block";
        const loaiSanPham = document.getElementById("loai_san_pham");
        const loaiValue = document.querySelector('input[name="option"]:checked').value;

        if (loaiValue === "name") {
            const productName = document.getElementById("product-name").value;
            loaiSanPham.innerHTML = `Tìm theo tên sản phẩm: ${productName}`;
        } else if (loaiValue === "type") {
            const productType = document.getElementById("product-type").value;
            loaiSanPham.innerHTML = `Tìm theo loại sản phẩm: ${productType}`;
        }
    }

    const submitButton = document.getElementById("submit-search");
    submitButton.addEventListener('click', submitSearch);
});

