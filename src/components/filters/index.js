const cities = [
	'lahore',
	'Islamabad',
	'Karachi',
	'Faislabad',
	'Multan',
	'Rawalpindi',
];
const ageCategory = ['10-20', '21-40', '41-50'];

function Filters({ filterByName, clearFilters }) {
	// 	const [name, setName] = useState('');
	// 	function validateTextField(text) {
	// 		return text !== '';
	// 	}
	// 	function handleSearch(input, method) {
	// 		if (validateTextField(name)) {
	// 			method(input);
	// 		}
	// 	}
	// 	function handleClearFilters() {
	// 		setName('');
	// 		clearFilters();
	// 	}
	// 	return (
	// 		<>
	// 			<CardContent>
	// 				<Button variant='outlined' sx={{ mb: 4 }} onClick={handleClearFilters}>
	// 					Clear filters
	// 				</Button>
	// 				<Box
	// 					sx={{
	// 						p: 2,
	// 						borderRadius: '20px',
	// 						background: (theme) => theme.palette.background.alternate,
	// 					}}
	// 				>
	// 					<Typography>Search Name</Typography>
	// 					<Box>
	// 						<TextField
	// 							fullWidth
	// 							label='Name'
	// 							size='small'
	// 							value={name}
	// 							onChange={(e) => setName(e.target.value)}
	// 							sx={{
	// 								mt: 2,
	// 								// '.MuiInputBase-input.MuiOutlinedInput-input': { py: 1 },
	// 							}}
	// 						/>
	// 						<Box sx={{ width: '120px', mt: 1, ml: 'auto' }}>
	// 							<Button
	// 								fullWidth
	// 								variant='contained'
	// 								onClick={() => handleSearch(name, filterByName)}
	// 							>
	// 								Search
	// 							</Button>
	// 						</Box>
	// 					</Box>
	// 				</Box>
	// 			</CardContent>
	// 			<CardContent>
	// 				<Box
	// 					sx={{
	// 						p: 2,
	// 						borderRadius: '20px',
	// 						background: (theme) => theme.palette.background.alternate,
	// 					}}
	// 				>
	// 					<Typography>Cities</Typography>
	// 					<Stack direction='row' sx={{ mt: 2, flexWrap: 'wrap', gap: 1 }}>
	// 						{cities.map((city) => {
	// 							return (
	// 								<Chip
	// 									key={city}
	// 									label={city}
	// 									clickable
	// 									sx={{
	// 										background: (theme) => theme.palette.background.default,
	// 										':hover': {
	// 											background: (theme) => theme.palette.background.paper,
	// 										},
	// 									}}
	// 								/>
	// 							);
	// 						})}
	// 					</Stack>
	// 					<Box>
	// 						<TextField
	// 							fullWidth
	// 							label='Search City'
	// 							size='small'
	// 							sx={{
	// 								mt: 2,
	// 								// '.MuiInputBase-input.MuiOutlinedInput-input': { py: 1 },
	// 							}}
	// 						/>
	// 						<Box sx={{ width: '120px', mt: 1, ml: 'auto' }}>
	// 							<Button fullWidth variant='contained'>
	// 								Search
	// 							</Button>
	// 						</Box>
	// 					</Box>
	// 				</Box>
	// 			</CardContent>
	// 			<CardContent>
	// 				<Box
	// 					sx={{
	// 						p: 2,
	// 						borderRadius: '20px',
	// 						background: (theme) => theme.palette.background.alternate,
	// 					}}
	// 				>
	// 					<Typography>Age Range</Typography>
	// 					<Stack direction='row' sx={{ mt: 2, flexWrap: 'wrap', gap: 1 }}>
	// 						{ageCategory.map((age) => {
	// 							return (
	// 								<Chip
	// 									key={age}
	// 									label={age}
	// 									clickable
	// 									sx={{
	// 										background: (theme) => theme.palette.background.default,
	// 										':hover': {
	// 											background: (theme) => theme.palette.background.paper,
	// 										},
	// 									}}
	// 								/>
	// 							);
	// 						})}
	// 					</Stack>
	// 					<Box>
	// 						<TextField
	// 							fullWidth
	// 							label='Age'
	// 							size='small'
	// 							type='number'
	// 							sx={{
	// 								mt: 2,
	// 								// '.MuiInputBase-input.MuiOutlinedInput-input': { py: 1 },
	// 							}}
	// 						/>
	// 						<Box sx={{ width: '120px', mt: 1, ml: 'auto' }}>
	// 							<Button fullWidth variant='contained'>
	// 								Search
	// 							</Button>
	// 						</Box>
	// 					</Box>
	// 				</Box>
	// 			</CardContent>
	// 		</>
	// 	);
}

export default Filters;
