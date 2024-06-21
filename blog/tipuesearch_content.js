var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/kevingg601/cd2024 網站: https://kevingg601.github.io/cd2024/ 簡報: https://kevingg601.github.io/cd2024/reveal 網誌: https://kevingg601.github.io/cd2024/blog","tags":"misc","url":"./pages/about/"},{"title":"完成w17任務","text":"完成w17任務(放在靜態網頁): w17靜態網頁連結","tags":"w17","url":"./41123111-2024-week-17-網誌😁.html"},{"title":"填寫自我評分表","text":"填寫自我評分表，努力把進度補齊","tags":"w17","url":"./41123111-2024-week-18-網誌😁.html"},{"title":"期末課程評分","text":"","tags":"w16","url":"./41123111-2024-week-16-網誌😁.html"},{"title":"w15","text":"與chatgpt討論網際綜合球類競賽機器人的程式: from zmqRemoteApi import RemoteAPIClient import keyboard import math import time client = RemoteAPIClient('localhost', 23000) print('Program started') sim = client.getObject('sim') print('Simulation started') 从场景中获取 a_player1, Sphere 和 sensor3 a_player1 = sim.getObject('/a_player1') Sphere = sim.getObject('/Sphere') sensor3 = sim.getObject('/sensor3') 定义将球放在球员头上的功能 def place_ball_on_head(): try: # 获取球员的位置 player_position = sim.getObjectPosition(a_player1, -1) # 计算球的位置，在球员的头上方 head_position = [ player_position[0], # 在 x 轴上保持不变 player_position[1], # 在 y 轴上保持不变 player_position[2] + 0.3 # 在 z 轴上略微抬高 ] # 设置球的位置 sim.setObjectPosition(Sphere, -1, head_position) print(\"Ball placed on the player's head.\") except Exception as e: print(f\"Error while placing ball on head: {e}\") 定义投篮功能 def shoot(): try: # 获取球的位置 ball_position = sim.getObjectPosition(Sphere, -1) # 设置球的初始速度，使其具有拋物线运动 throw_force = 90.0 pitch_angle = 45.0 * math.pi / 180 # 投篮角度固定在45度 force_vector = [ 0, # 在 x 轴上力为0 throw_force * math.cos(pitch_angle), # 在 y 轴上的力 throw_force * math.sin(pitch_angle) # 在 z 轴上的力，向上 ] # 对球施加力 sim.addForceAndTorque(Sphere, force_vector, [0, 0, 0]) print(\"Ball thrown with force.\") except Exception as e: print(f\"Error while shooting: {e}\") 定义控制球员移动的函数 def move_player(direction): speed = 0.05 # 球员移动速度 # 根据方向计算移动增量 if direction == 's': delta_position = [speed, 0, 0] # 在 x 轴上向前移动 elif direction == 'w': delta_position = [-speed, 0, 0] # 在 x 轴上向后移动 elif direction == 'd': delta_position = [0, speed, 0] # 在 y 轴上向右移动 elif direction == 'a': delta_position = [0, -speed, 0] # 在 y 轴上向左移动 else: delta_position = [0, 0, 0] # 不移动 # 获取当前球员位置 current_position = sim.getObjectPosition(a_player1, -1) # 计算新的位置 new_position = [current_position[0] + delta_position[0], current_position[1] + delta_position[1], current_position[2] + delta_position[2]] # 更新球员位置 sim.setObjectPosition(a_player1, -1, new_position) 主循环，监听键盘输入 while True: try: # 监听键盘输入，根据按键控制球员移动 if keyboard.is_pressed('s'): move_player('s') elif keyboard.is_pressed('w'): move_player('w') elif keyboard.is_pressed('d'): move_player('d') elif keyboard.is_pressed('a'): move_player('a') if keyboard.is_pressed('1'): place_ball_on_head() # 检查 sensor3 是否感测到球 sensor_state = sim.readProximitySensor(sensor3) if sensor_state[0]: # 如果感测到球 shoot() # 添加短暂延迟，避免占用过多CPU资源 time.sleep(0.01) except KeyboardInterrupt: print(\"Program interrupted\") break except Exception as e: print(f\"Error in main loop: {e}\") break","tags":"w15","url":"./41123111-2024-week-15-網誌😁.html"},{"title":"w14","text":"網際綜合球類競賽機器人協同設計: 完成零件檔 完成零件檔","tags":"w14","url":"./41123111-2024-week-14-網誌😁.html"},{"title":"課程評分","text":"課程評分: 學員每週編寫網誌內容佔 40% 每週上課內容摘要與分組報告執行分工及進度整理 相關資料收集與閱讀心得 分組期中報告佔 20% 分組期中 pdf 報告與 mp4 簡報影片 每組至多 8 人 期中報告題目: ODOO PLM 在協同產品設計上的應用 - 以鋼球平衡台機電控制系統設計為例 分組期末報告佔 40% 分組期末 pdf 報告與 mp4 簡報影片 期末報告題目: 網際綜合球類競賽機器人協同設計與模擬 競技場景中必須納入數位計時器與類比記分機構 每場競技時間為 10 分鐘 每隊球員機器人依照各組人數平均分為兩隊 每位機器人球員必須同時具備踢球、取球與投球機構 雙方陣營各有足球門與籃球框各一具 球場中由裁判程式於開場時, 在球場正中央落下 10 球 將球踢進對方球門者得 1 分, 將球投入對方籃框者得 5 分","tags":"w13","url":"./41123111-2024-week-13-網誌😁.html"},{"title":"w12 任務1&2&3","text":"任務一: 繪圖檔案連結 任務二: 將分組倉儲設為評分網站子模組 g4 的子模組指令為: git submodule add https://github.com/mdecd2024/2a-midag4 g4 任務三:","tags":"w12","url":"./41123111-2024-week-12-網誌😁.html"},{"title":"w11","text":"繪製鋼球平衡台零件","tags":"w11","url":"./41123111-2024-week-11-網誌😁.html"},{"title":"w10","text":"繪製鋼球平衡台零件","tags":"w10","url":"./41123111-2024-week-10-網誌😁.html"},{"title":"期中自評","text":"41123111心得: 這門課學到了如何使用Git和GitHub進行團隊合作，提高了專案管理能力。通過Replit和Nx等工具，加強了程式開發環境建置和代碼組織技巧。在協同產品設計中，體會到團隊合作的重要性，並探索了AI工具的應用。受益匪淺並增加職業發展價值。","tags":"w9","url":"./41123111-2024-week-9-網誌😁.html"},{"title":"chatgpt 討論","text":"與chatgpt 討論","tags":"w8","url":"./41123111-2024-week-8-網誌😁.html"},{"title":"更新小組各組員的子模組","text":"使用指令:git submodule update --init cd 41123111 git pull origin main cd .. git add . git commit git push","tags":"w6","url":"./41123111-2024-week-6-網誌😁.html"},{"title":"教學影片分組整理","text":"小組影片整理 https://mdecd2024.github.io/2a-midag4/content/%E5%B0%8F%E7%B5%84%E5%BD%B1%E7%89%87.html","tags":"w5","url":"./41123111-2024-week-5-網誌😁.html"},{"title":"影片上字幕","text":"影片上字幕 https://nfuedu-my.sharepoint.com/:b:/g/personal/41123111_nfu_edu_tw/Eb_yMyzqH75HsRy47Vtr3JwBc4xnRzH5gMEKOHope7Gk-g?e=3b31tI","tags":"w4","url":"./41123111-2024-week-4-網誌😁.html"},{"title":"中英文並列資料","text":"中英文並列資料(24~35) https://nfuedu-my.sharepoint.com/:f:/g/personal/41123111_nfu_edu_tw/ErjacL5iGfNApaSBOrMukKgBZscGhR5115F13U3zCAfBXA?e=hWiL60","tags":"w3","url":"./41123111-2024-week-3-網誌😁.html"},{"title":"加入小組(第四組)","text":"加入小組(第四組).","tags":"w2","url":"./41123111-2024-week-2-網誌😁.html"},{"title":"網誌設定","text":"網誌初期設定. 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./41123111-2024-week-1-網誌😁.html"}]};