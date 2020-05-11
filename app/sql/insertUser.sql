INSERT INTO users(
	email,
	password,
	created_on
) VALUES (
	$1,
	$2,
	NOW()
) ON CONFLICT DO NOTHING