// 음악 데이터 
const musicData = {
    "60s": {
      pop: { 
        artist: "The Beatles", 
        song: "Hey Jude", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/9C7eElvTf38?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      ballad: { 
        artist: "Frank Sinatra", 
        song: "My Way", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/v2hlQkVJZhE?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      hiphop: { 
        artist: "Sugarhill Gang", 
        song: "Rapper's Delight", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/bW_q9G8U8kU?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      rnb: { 
        artist: "Marvin Gaye", 
        song: "Let's Get It On", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/f8P2sAfPE3c?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      trot: { 
        artist: "Nam Jin", 
        song: "Cinderella", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/h0I1MY29N-s?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      dance: { 
        artist: "James Brown", 
        song: "I Got You (I Feel Good)", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/qG7ifG7C6k8?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      }
    },
    "70s": {
      pop: { 
        artist: "ABBA", 
        song: "Dancing Queen", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/xFrGuyw1V8g?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      ballad: { 
        artist: "Elton John", 
        song: "Your Song", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/5Nip6gT5W7M?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      hiphop: { 
        artist: "Grandmaster Flash", 
        song: "The Message", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/SZ8RYf1aM1Q?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      rnb: { 
        artist: "Stevie Wonder", 
        song: "Superstition", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/0SOTIF0KoLk?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      trot: { 
        artist: "Hyeon Jeong Hwa", 
        song: "Myeong Jae", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/D6qNmz9Wli0?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      dance: { 
        artist: "Bee Gees", 
        song: "Stayin' Alive", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/I_izvAbhExY?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      }
    },
    "80s": {
      pop: { 
        artist: "Michael Jackson", 
        song: "Billie Jean", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/2MsX37G6W5M?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      ballad: { 
        artist: "Whitney Houston", 
        song: "I Will Always Love You", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/3JWT7qzA8Z8?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      hiphop: { 
        artist: "Run-DMC", 
        song: "Walk This Way", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/4B_UYYPb-Gk?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      rnb: { 
        artist: "Prince", 
        song: "Purple Rain", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Ts2nNqaVg2g?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      trot: { 
        artist: "Song Dae-gwan", 
        song: "Hwa Yang Yeon Hwa", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Y6He7U_o63I?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      dance: { 
        artist: "Cyndi Lauper", 
        song: "Girls Just Want to Have Fun", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/PI9sZ3NcF6Y?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      }
    },
    "90s": {
      pop: { 
        artist: "Spice Girls", 
        song: "Wannabe", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed=gJLIiF15wjQ?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      ballad: { 
        artist: "Celine Dion", 
        song: "My Heart Will Go On", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed=Y9n0hAqT0DE?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      hiphop: { 
        artist: "TLC", 
        song: "Waterfalls", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed=8YKY1M1G4rY?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      rnb: { 
        artist: "R. Kelly", 
        song: "I Believe I Can Fly", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed=B2G4Jb3-Id8?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      trot: { 
        artist: "Kim Soo-hee", 
        song: "Pansori", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed=W1_qaWyo3SU?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      dance: { 
        artist: "Daft Punk", 
        song: "Around the World", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed=GxXbBRiO10M?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      }
    },
    "2000s": {
      pop: { 
        artist: "Britney Spears", 
        song: "Toxic", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed=6Sj5V_Ep5Uo?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      ballad: { 
        artist: "Adele", 
        song: "Someone Like You", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed=YzKTDddD4Es?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      hiphop: { 
        artist: "Eminem", 
        song: "Lose Yourself", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed=8ptp2mghXv8?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      rnb: { 
        artist: "Beyoncé", 
        song: "Crazy In Love", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/OX0XWuYQ8XE?si=DO1CjwKc3G9_YjVL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      trot: { 
        artist: "남진", 
        song: "둥지", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed=Uhr-_S8B9VY?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      dance: { 
        artist: "Lady Gaga", 
        song: "Just Dance", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed=B17K7KJLN2E?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      }
    },
    "2010s": {
      pop: { 
        artist: "Katy Perry", 
        song: "Roar", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed=HgAT9gYV8_Y?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      ballad: { 
        artist: "Ed Sheeran", 
        song: "Perfect", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed=2VxB1NrMTl0?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      hiphop: { 
        artist: "Drake", 
        song: "God's Plan", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed=XYqRElJYc2E?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      rnb: { 
        artist: "The Weeknd", 
        song: "Blinding Lights", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed=4NRXx6U8AB0?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      trot: { 
        artist: "Kim Yong-woo", 
        song: "Love Me", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed=IY18g7dd4Mc?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      dance: { 
        artist: "David Guetta", 
        song: "Titanium", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed=AXSgDh89g8I?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      }
    },
    "2020s": {
      pop: { 
        artist: "Dua Lipa", 
        song: "Don't Start Now", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed=oybqS4tO0xI?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      ballad: { 
        artist: "Lewis Capaldi", 
        song: "Someone You Loved", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed=ptD8C20y0-c?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      hiphop: { 
        artist: "Megan Thee Stallion", 
        song: "Savage", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed=PTltZZFm-wc?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      rnb: { 
        artist: "SZA", 
        song: "Good Days", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed=Zz_vB5Crp68?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      trot: { 
        artist: "Hong Jin-young", 
        song: "Love Battery", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed=qjJcn1F76_I?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      },
      dance: { 
        artist: "Marshmello", 
        song: "Happier", 
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed=8C8kJK__eIU?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
      }
    }
  };
  
  
  
  let currentMusic = null;



document.getElementById('playButton').addEventListener('click', function() {
    const selectedEra = document.getElementById('eraSelect').value;
    const selectedGenre = document.getElementById('genreSelect').value;
    
    const music = musicData[selectedEra][selectedGenre];
    
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.innerHTML = music.iframe; // iframe 추가

    // 5초 후에 비디오 멈추기
    setTimeout(() => {
        videoContainer.innerHTML = ''; // iframe 제거
    }, 5000);
});

  
  // 다시 듣기 버튼 클릭 시 음악 다시 재생
  document.getElementById("listenAgain").addEventListener("click", function() {
    if (currentMusic) {
      const iframeContainer = document.getElementById("youtubePlayerContainer");
      iframeContainer.innerHTML = currentMusic.iframe; // iframe HTML 추가
    }
  });
  
  // 정답 제출 버튼 클릭 시 정답 확인
  document.getElementById("submitAnswer").addEventListener("click", function() {
    const artistInput = document.getElementById("artist").value;
    const songInput = document.getElementById("song").value;
  
    if (artistInput === currentMusic.artist && songInput === currentMusic.song) {
      alert("정답입니다! 🎉");
    } else {
      alert(`오답입니다. 정답은 ${currentMusic.artist}의 "${currentMusic.song}"입니다.`);
    }
  
    // 입력 필드 초기화
    document.getElementById("artist").value = "";
    document.getElementById("song").value = "";
    document.getElementById("answerSection").classList.add("hidden");
    document.getElementById("listenAgain").disabled = true;
  });
  
  