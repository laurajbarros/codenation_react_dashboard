import React from 'react';
import './filters.scss';

const Filters = ({search, handleSearchChange, handleOrderFilterChange, orderFilter}) => {
	return (
    <div className="container" data-testid="filters">
			<section className="filters">
				<div className="filters__search">
					<input
						type="text"
						className="filters__search__input"
						placeholder="Pesquisar"
						value={search}
						onChange={handleSearchChange}
					/>
					<button
						className="filters__search__icon">
						<i className="fa fa-search"/>
					</button>
				</div>

				<button
					className={`filters__item ${ orderFilter === "name" ? "is-selected" : ""}`}
					name="name"
					onClick={handleOrderFilterChange}
				>
					Nome <i className="fas fa-sort-down" />
				</button>

				<button
					className={`filters__item ${ orderFilter === "country" ? "is-selected" : ""}`}
					name="country"
					onClick={handleOrderFilterChange}
				>
					País <i className="fas fa-sort-down" />
				</button>

				<button
					className={`filters__item ${ orderFilter === "company" ? "is-selected" : ""}`}
					name="company"
					onClick={handleOrderFilterChange}
				>
					Empresa <i className="fas fa-sort-down" />
				</button>

				<button
					className={`filters__item ${ orderFilter === "department" ? "is-selected" : ""}`}
					name="department"
					onClick={handleOrderFilterChange}
				>
					Departamento <i className="fas fa-sort-down" />
				</button>

				<button
					className={`filters__item ${ orderFilter === "admissionDate" ? "is-selected" : ""}`}
					name="admissionDate"
					onClick={handleOrderFilterChange}
				>
					Data de admissão <i className="fas fa-sort-down" />
				</button>
			</section>
		</div>
	);
}

export default Filters;
