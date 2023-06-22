def main():
	with open('test.txt', 'a+') as f:
		f.write('writen')
		f.write('\n')
	print('running')
main()