const Navbar = ({handleFilter}) => {
    return (
        <div className="navbar">
            <button onClick={handleFilter}>random</button>
        </div>
    );
}
 
export default Navbar;