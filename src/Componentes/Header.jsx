
function Header(props){
return(
  <div className="container">
    <h1 className="header_text">{props.children}</h1>
  </div>
)
}

export default Header