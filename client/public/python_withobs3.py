import random
def is_prime(n):
    if n <= 1:
        return False
    elif n <= 3:
        return True
    elif n % 2 == 0 or n % 3 == 0:
        print(n,"--")
        return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True
def generate_prime():
    while True:
        p = random.randint(100, 1000)
        if is_prime(p):
            return p
def gcd(a, b):
    if b == 0:
        return a
    return gcd(b, a % b)
def generate_keys():
    p = generate_prime()
    q = generate_prime()
    n = p * q
    phi = (p - 1) * (q - 1)
    print(p,q,n,phi)
    while True:
        e = random.randint(2, phi)
        if gcd(e, phi) == 1:
            break
    d = pow(e, -1, phi)
    return (e, n), (d, n)
def encrypt(message, public_key):
    e, n = public_key
    cipher = [pow(ord(c), e, n) for c in message]
    return cipher
def decrypt(cipher, private_key):
    d, n = private_key
    message = [chr(pow(c, d, n)) for c in cipher]
    return ''.join(message)
def main():
    message = input("\n\n\tEnter a message to encrypt: ")
    public_key, private_key = generate_keys()
    encrypted_message = encrypt(message, public_key)
    print("\n\tEncrypted message:", encrypted_message)
    decrypted_message = decrypt(encrypted_message, private_key)
    print("\n\tDecrypted message:", decrypted_message)
if __name__ == "__main__":
    main()














    
