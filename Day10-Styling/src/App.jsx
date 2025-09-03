import ProductCardList from "./components/ProductCardList";

export default function App() {
  const products = [
    { id: 1, title: "Wireless Headphones", price: 1999, img: "https://imgs.search.brave.com/o9YBRvrUu6OJJe0MFMDjhqOSh8YMue6nYmcf1e31_-s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI4/MTIxMzA2NS9waG90/by93aXJlbGVzcy1o/ZWFkcGhvbmVzLW9u/LXBpbmstYmFja2dy/b3VuZC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9M0F6Z3A5/MXBzdFZxZE9KNUJa/aFctNVFYRnpBeTdV/aW5ITjlNLVVCbVZ3/cz0" },
    { id: 2, title: "Smart Watch", price: 2999, img: "https://imgs.search.brave.com/3dT1bU_7ET5C796-DpNEkQ83vYfqzMFhzB8hzSzkz3k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzgyLzM3Lzgy/LzM2MF9GXzU4MjM3/ODIwNV9FdnlqSGxW/bm5nZEZkM0tkRUVQ/VmtBWlUyWGRoYkpZ/Ty5qcGc" },
    { id: 3, title: "Gaming Mouse", price: 1499, img: "https://imgs.search.brave.com/WH4y_ZYheVVIHkthz6-bjFjt35Y3bDQ9sD3Cbe2Urdo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzI1LzA3LzI4/LzM2MF9GXzYyNTA3/Mjg3NF9lUm95NEhV/YjhJT3pUeENuUzZq/TFQzMkNoYVBHM3J2/Yi5qcGc" },
    { id: 4, title: "Mechanical Keyboard", price: 3499, img: "https://imgs.search.brave.com/CpZ_Z_38hFX_pCqxXBm6wuOo-HTxwIY5pKHa6MjM3ys/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L1BR/TG9FRVJGUlBIU1lC/Ymt3dlBQV1MuanBn" },
    { id: 5, title: "USB-C Cable", price: 899, img: "https://imgs.search.brave.com/oDd8iUzYprvfqoQWhrmbxDrVpC66y6UPypV-ScTXWW8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dGhld2lyZWN1dHRl/ci5jb20vd3AtY29u/dGVudC9tZWRpYS8y/MDI0LzA2L3VzYmNj/YWJsZXNhZGFwdGVy/cy0yMDQ4cHgtMjU1/NS5qcGc_YXV0bz13/ZWJwJnF1YWxpdHk9/NzUmd2lkdGg9MTAy/NA" },
    { id: 6, title: "Bluetooth Speaker", price: 2499, img: "https://imgs.search.brave.com/cWgW4cOxA2Iq7yhEn4jK_WgaTpikNB7UKu_NEvPkljw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE2LzM1LzA0LzMw/LzM2MF9GXzE2MzUw/NDMwMzNfN0hPTW85/TTFON2dlU2RpbndI/MUhXTE95WHV4dE9j/MEwuanBn" },
  ];

  return <ProductCardList products={products} />;
}
