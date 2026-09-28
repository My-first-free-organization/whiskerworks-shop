// 404 Meow Button Easter Egg

const MEOW_SOUNDS = Array.from({length: 47}, (_, i) => `/audio/meow-${i + 1}.mp3`);
let meowIndex = 0;

export function playMeow(): void {
  const audio = new Audio(MEOW_SOUNDS[meowIndex % MEOW_SOUNDS.length]);
  audio.play();
  meowIndex++;
  // After all 47 meows, play the special 'angry meow'
  if (meowIndex === 47) console.log('Achievement unlocked: Cat Whisperer');
}
