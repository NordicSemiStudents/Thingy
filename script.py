sep = "power_manage();\n"
with open ("blockCode.c") as file:
    blockCode = file.read()
with open("main.c") as file:
    firstPart, sep, secondPart = file.read().partition(sep)
with open("main.c", "w") as file:
    file.write(firstPart + sep + blockCode + secondPart)
