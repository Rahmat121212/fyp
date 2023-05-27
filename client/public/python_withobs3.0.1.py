def gcd(a, b):
    """Returns the greatest common divisor (GCD) of two numbers."""
    while b != 0:
        a, b = b, a % b
    return a

def are_relatively_prime(a, b):
    """Checks if two numbers are relatively prime."""
    return gcd(a, b) == 1

# Accept input from the user
num1 = int(input("Enter the first number: "))
num2 = int(input("Enter the second number: "))

# Check if the numbers are relatively prime
if are_relatively_prime(num1, num2):
    print(f"{num1} and {num2} are relatively prime.")
else:
    print(f"{num1} and {num2} are not relatively prime.")
