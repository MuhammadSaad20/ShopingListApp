'''
def f(n):
  if n < 0:
    return n
  return n * f(n-1)

print(f(4))

'''


class Rectangle(object):
    description = "A rectangle has equal opposite sides"

    def __init__(self, length, width):
        self.length = length
        self.width = width

    def area(self):
        return self.length * self.width


class Square(Rectangle):
    description = "A square has 4 equal sides"

    def __init__(self, length):
        super(Square, self).__init__(length, length)


class Cube(Square):
    def area(self):
        face_area = super(Square, self).area()
        return face_area * 6


cube = Cube(2)
cube_area = cube.area()

print(cube_area)
print(cube.description)
