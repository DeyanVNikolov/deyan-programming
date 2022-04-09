processor_price = float(input())
gpu_price = float(input())
ram_price = float(input())
ram_count = int(input())
discount = float(input())

cpu = processor_price * 1.57
gpu = gpu_price * 1.57
ram = (ram_count * ram_price) * 1.57


cpu_final = cpu * (1 - discount)
gpu_final = gpu * (1 - discount)

total = cpu_final + gpu_final + ram

print(f"Money needed - {total:.2f} leva.")
