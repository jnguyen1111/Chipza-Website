from __future__ import unicode_literals
import youtube_dl
import time , string , os

batch_of_links =[]
desktop_path ="C:"+ os.environ["HOMEPATH"]+"\Desktop"

while True:
    urls = input ("Insert Youtube Urls (Single Video or Playlist Url) to download. Type end exactly as written to start downloading\n-> ")
    if urls != 'end':
        batch_of_links.append(urls)
    elif urls == 'end':
        break

for conv_link in batch_of_links:
    while True:
        user_input = input('\nDo you wish to convert {} url into a mp3 or mp4 file?\n-> '.format(conv_link)).upper()
        if user_input == "MP3" or user_input == "MP4":
            break
        elif user_input != "MP3":
            print("Error invalid file type please try again.")
            continue

    user_ask_folder = input('\nWhat would you like to call the folder that will be created for the song files that will be downloaded?\n-> ').capitalize()

    print('\nnow converting {} to {}'.format(conv_link,user_input))
    time.sleep(1)

    if user_input == 'MP3':
        ydl_opts = {
            'outtmpl': desktop_path +'/{}/%(title)s.%(ext)s'.format(user_ask_folder),
            'ignoreerrors': 'opts.ignoreerrors',
            'format': 'bestaudio/best',
            'postprocessors': [{
                'key': 'FFmpegExtractAudio',
                'preferredcodec': 'mp3',
                'preferredquality': '320',
            }],
        }
        with youtube_dl.YoutubeDL(ydl_opts) as ydl:
            ydl.download([conv_link])

    elif user_input == 'MP4':
        ydl_opts = {
            'outtmpl': desktop_path + '/{}/%(title)s.%(ext)s'.format(user_ask_folder),
            'ignoreerrors': 'opts.ignoreerrors',
            'format' : 'bestvideo[ext=mp4][width=1920][height=1080]+bestaudio[ext=m4a]/best'
            #"format" : "best"
        }
        with youtube_dl.YoutubeDL(ydl_opts) as ydl:
            ydl.download([conv_link])
