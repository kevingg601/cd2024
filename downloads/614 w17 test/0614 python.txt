import keyboard
import math

# 连接到仿真器
from zmqRemoteApi import RemoteAPIClient
client = RemoteAPIClient('localhost', 23000)
sim = client.getObject('sim')

print('Program started')
print('Simulation started')

# 控制的球员
player = '/a_player1'

def setVelocity(v):
    motors = [
        sim.getObject(player+'/joint_lf'),
        sim.getObject(player+'/joint_rf'),
        sim.getObject(player+'/joint_lb'),
        sim.getObject(player+'/joint_rb')
    ]
    for motor in motors:
        sim.setJointTargetVelocity(motor, v)

def setAngle(y):
    ontology = sim.getObject(player)
    angle = [0, y * math.pi / 180, 0]
    motors = [
        sim.getObject(player+'/joint_lf'),
        sim.getObject(player+'/joint_rf')
    ]
    for motor in motors:
        sim.setObjectOrientation(motor, ontology, angle)

def turnover():
    floor = sim.getObject('/Floor')
    player1 = sim.getObject(player)
    a = sim.getObjectOrientation(player1, floor)
    b = sim.getObjectPosition(player1, floor)
    a[0] = 0
    a[1] = 0
    b[2] = 0.3
    sim.setObjectPosition(player1, floor, b)
    sim.setObjectOrientation(player1, floor, a)

def playerControl(v, a):
    if keyboard.is_pressed('w'):
        setVelocity(v)
        setAngle(a)
    elif keyboard.is_pressed('s'):
        setVelocity(-v)
        setAngle(a)
    elif keyboard.is_pressed('d'):
        setVelocity(v)
        setAngle(-a)
    elif keyboard.is_pressed('a'):
        setVelocity(-v)
        setAngle(-a)
    elif keyboard.is_pressed('space'):
        turnover()
    elif keyboard.is_pressed('q'):
        sim.stopSimulation()
    else:
        setVelocity(0)
        setAngle(0)

while True:
    if keyboard.is_pressed('shift'):
        playerControl(12, 40)
    else:
        playerControl(8, 40)
