def is_prime(number):
    if number < 2:
        return False
    for i in range(2, int(number ** 0.5) + 1):
        if number % i == 0:
            return False
    return True

# Accept input from the user
num = int(input("Enter a number: "))

# Check if the number is prime or composite
if is_prime(num):
    print(f"{num} is a prime number.")
else:
    print(f"{num} is a composite number.")
