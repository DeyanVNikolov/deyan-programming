duljina = int(input())
shirina = int(input())
visochina = int(input())
procent = float(input()) / 100

obem = duljina * shirina * visochina
total_liters = obem / 1000
liters = total_liters * (1 - procent)
print(liters)
