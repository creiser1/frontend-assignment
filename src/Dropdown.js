import React, { useEffect, useRef, useState } from 'react';
import './Dropdown.css';

export default function Dropdown(props) {
	const title = props.title
  	const list = props.list;
  	const isSingleSelect = props.singleSelect;
	const hasSearch = props.hasSearch;

	const [hideMenu, setHideMenu] = useState(true);
	const [selected, setSelected] = useState(isSingleSelect ? null : []);
	const [searchVal, setSearchVal] = useState("");
	const searchRef = useRef();

	useEffect(() => {
		setSearchVal("");
		if(hideMenu && searchRef.current) {
			searchRef.current.focus();
		}
	}, [hideMenu]);

	const handleArrowClick = () => {
		setHideMenu(!hideMenu);
	};

	const handleItemClick = (item) => {
		let addedItem;
		if(isSingleSelect) {
			if(selected && item.value === selected.value) {
				addedItem = null;
			} else {
				addedItem = item
			}
		} else {
			if(selected.findIndex((i) => i.value === item.value) >= 0) {
				addedItem = selected.filter((i) => i.value !== item.value);
			} else {
				addedItem = [...selected, item];
			}
		}
		setSelected(addedItem);
	};

	const handleSelectAll = () => {
		if(!searchVal) {
			setSelected(list);
		} else {
			const uniqueSearchItems = getItems().filter((item) => selected.indexOf(item) === -1);
			setSelected([...selected, ...uniqueSearchItems]);
		}
	};

	const handleDeselectAll = () => {
		setSelected([]);
	};

	const handleSearch = (input) => {
		setSearchVal(input.target.value);
	};

	const getItems = () => {
		if(!searchVal) return list;
		return list.filter((item) => item.value.toLowerCase().indexOf(searchVal.toLowerCase()) >= 0);
	};

  	const getSelections = () => {
			if(!selected || selected.length === 0) {
				return "Select...";
			}
			if(!isSingleSelect) {
				if(selected.length === 1) return selected[0].value;
				let selectedList = "";
				selected.forEach((item, idx) => {
					selectedList += item.value;
					if(idx < selected.length-1) selectedList += ", ";
				})
				return selectedList;
			} else {
				return selected.value;
			}
  	};

	const isSelected = (item) => {
		if(!isSingleSelect) {
			return selected.filter((i) => i.value === item.value).length > 0;
		}
		if(!selected) return false;
		return selected.value === item.value;
	};

	return(
		<div className="dropdown">
			<h3>{title ?? ""}</h3>
			<div onClick={handleArrowClick} className="dropdown-box">
				<div className="dropdown-selections">
					{getSelections()}
				</div>
				<div className="arrow-down"></div> 
			</div>
			<div>
				<div className="dropdown-helpers">
					{!hideMenu && hasSearch && (
						<input className="search-bar" 
							onChange={handleSearch}
							type="text" 
							placeholder="Search..." 
							autocomplete="off" />
					)}
					{!hideMenu && !isSingleSelect && (
						<div>
							<button onClick={() => handleSelectAll()}>Select All</button>
							<button onClick={() => handleDeselectAll()}>Deselect All</button>
						</div>
					)}
				</div>
				{!hideMenu && (
					<div className="dropdown-menu">
						{
							getItems().map((item) => (
								<div key={item.value}
									onClick={() => handleItemClick(item)} 
									className={`dropdown-item ${isSelected(item) && "selected"}`}>
									{item.value}
								</div>
							))
						}
					</div>
				)}
			</div>
		</div>
	);
}

Dropdown.defaultProps = {
	singleSelect: true,
	hasSearch: false,
};