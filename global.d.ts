// global.d.ts

interface SpeechRecognitionEvent extends Event {
    results: SpeechRecognitionResultList;
}

interface SpeechRecognitionResultList {
    0: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
    transcript: string;
    confidence: number;
}

interface SpeechRecognitionError extends Event {
    error: string;
}

interface SpeechRecognition extends EventTarget {
    onend: () => void;
    new (): SpeechRecognition;

    start: () => void;
    stop: () => void;
    lang: string;
    onresult: (event: SpeechRecognitionEvent) => void;
    onerror: (event: SpeechRecognitionError) => void;
}

interface Window {
    SpeechRecognition: new () => SpeechRecognition;
    webkitSpeechRecognition: new () => SpeechRecognition;
}
