import React, { useState, useRef } from "react";
import "./navbar.css";

const elems = [<div>elem 0</div>, <div>elem 1</div>, <div>elem 2</div>];

function Navbar() {
	const [showMenu, setShowMenu] = useState(false);
	const [curElem, setCurElem] = useState(0);
	const [currElemIdx, setCurrElemIdx] = useState([0, 1, 2]);
	const hvrMenuCtnRef = useRef(null);
	const hvrOutTimeoutRef = useRef(null);

	React.useEffect(() => {
		console.log(curElem, hvrMenuCtnRef.current.clientWidth);
	}, [curElem, hvrMenuCtnRef.current?.clientWidth]);

	React.useEffect(() => {
		console.log(showMenu);
	}, [showMenu]);

	function handleHoverInChild(e) {
		// setShowMenu(true);
		// e.stopPropagation();
		const id = parseInt(e.currentTarget.id, 10);
		if (id > curElem) slideRight();
		else if (curElem > id) slideLeft();

		setCurElem(id);
	}

	function handleHoverInParent() {
		if (hvrOutTimeoutRef.current) clearTimeout(hvrOutTimeoutRef.current);
		setShowMenu(true);
	}

	function handleHoverOut() {
		// if (setShowMenu) setShowMenu(false);
		if (hvrOutTimeoutRef.current) clearTimeout(hvrOutTimeoutRef.current);

		hvrOutTimeoutRef.current = setTimeout(() => {
			setShowMenu(false);
		}, 1000);
	}

	function slideRight() {
		setCurrElemIdx(currElemIdx.map((idx) => idx - 1));
	}

	function slideLeft() {
		setCurrElemIdx(currElemIdx.map((idx) => idx + 1));
	}

	return (
		<nav className="header-navbar">
			<h2>React NavBar</h2>
			<ul
				className="header-navbar__ctn"
				onMouseOver={handleHoverInParent}
				onMouseOut={handleHoverOut}
			>
				<li
					id="0"
					onMouseOver={handleHoverInChild}
					// onMouseOut={handleHoverOut}
				>
					Menu-drop1
				</li>
				<li
					id="1"
					onMouseOver={handleHoverInChild}
					// onMouseOut={handleHoverOut}
				>
					Menu-drop2
				</li>
				<li
					id="2"
					onMouseOver={handleHoverInChild}
					// onMouseOut={handleHoverOut}
				>
					Menu-drop3
				</li>

				<div
					className={`header-navbar__ctn__hover-menu-ctn ${
						!showMenu
							? ""
							: "header-navbar__ctn__hover-menu-ctn--open"
					}`}
					ref={hvrMenuCtnRef}
				>
					{/* <div className="header-navbar__ctn__hover-menu-ctn__scale-ctn"> */}
					<div
						style={{
							left:
								currElemIdx[0] *
								hvrMenuCtnRef.current?.clientWidth,
							opacity: currElemIdx[0] === 0 ? 1 : 0,
						}}
					>
						{/* Left ctn */}
						<div>
							<h3>Links</h3>
							<div>
								<h4>Link 1</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit.
								</p>
							</div>

							<div>
								<h4>Link 2</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit.
								</p>
							</div>

							<div>
								<h4>Link 3</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit.
								</p>
							</div>
						</div>

						{/* Right ctn */}
						<div>
							<h3>Some more links</h3>

							<div>
								<h4>Link 1</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit.
								</p>

                                {/* Hover drop right ctn */}
								<div>
									<div>
										<h4>Link 1</h4>
										<p>
											Lorem ipsum dolor sit amet
										</p>
									</div>

                                    <div>
										<h4>Link 2</h4>
										<p>
											Lorem ipsum dolor sit amet
										</p>
									</div>
								</div>
							</div>

							<div>
								<h4>Link 2</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit.
								</p>

								{/* Hover drop right ctn */}
								<div>
									<div>
										<h4>Link 1</h4>
										<p>
											Lorem ipsum dolor sit amet
										</p>
									</div>

                                    <div>
										<h4>Link 2</h4>
										<p>
											Lorem ipsum dolor sit amet
										</p>
									</div>
								</div>
							</div>

							<div>
								<h4>Link 3</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit.
								</p>

								{/* Hover drop right ctn */}
								<div>
									<div>
										<h4>Link 1</h4>
										<p>
											Lorem ipsum dolor sit amet
										</p>
									</div>

                                    <div>
										<h4>Link 2</h4>
										<p>
											Lorem ipsum dolor sit amet
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div
						style={{
							left:
								currElemIdx[1] *
								hvrMenuCtnRef.current?.clientWidth,
							opacity: currElemIdx[1] === 0 ? 1 : 0,
						}}
					>
						elem 2
					</div>

					<div
						style={{
							left:
								currElemIdx[2] *
								hvrMenuCtnRef.current?.clientWidth,
							opacity: currElemIdx[2] === 0 ? 1 : 0,
						}}
					>
						elem 3
					</div>
					{/* </div> */}
				</div>
			</ul>
		</nav>
	);
}

export default Navbar;
