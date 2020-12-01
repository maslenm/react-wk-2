const Password = ({ label, colour, handleChange, value }) => {
	return (
		<form>
			<label>
				{label}
				<input
					className="form-control"
					type="text"
					onChange={handleChange}
					value={value}
					style={{
						borderColor: colour,
					}}
				/>
			</label>
		</form>
	);
};

export default Password;
