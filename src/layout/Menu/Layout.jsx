// import { Outlet, NavLink } from "react-router-dom";
// import styles from "./Layout.module.scss";
// import cn from "classnames";
// import Home from "../../pages/Home/Home";
// import {
//   RouterProvider,
//   createBrowserRouter,
//   defer,
//   Route,
//   Routes,
// } from "react-router-dom";

// function Layout() {
//   console.log(items);
//   return (
//     <div className={styles["layout"]}>
//       <div>
//         <NavLink
//           className={({ isActive }) =>
//             cn(styles[""], { [styles.active]: isActive })
//           }
//           to="/"
//         >
//           Home
//         </NavLink>
//         <NavLink
//           className={({ isActive }) =>
//             cn(styles[""], { [styles.active]: isActive })
//           }
//           to="/cart"
//         >
//           Cart
//         </NavLink>
//       </div>

//       <div>
//         <Outlet
//         // items={items}
//         // searchValue={searchValue}
//         // setSearchValue={setSearchValue}
//         // onChangeSearchInput={onChangeSearchInput}
//         // onAddFavorite={onAddFavorite}
//         // onAddToCart={onAddToCart}
//         />
//       </div>
//     </div>
//   );
// }

// {
//   /* <Routes>
//   <Route
//     path="/"
//     element={
//       <Home
//         items={items}
//         searchValue={searchValue}
//         setSearchValue={setSearchValue}
//         onChangeSearchInput={onChangeSearchInput}
//         onAddFavorite={onAddFavorite}
//         onAddToCart={onAddToCart}
//       />
//     }
//     exact
//   />
// </Routes>; */
// }

// export default Layout;
