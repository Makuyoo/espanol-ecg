# Español ECG — Déploiement Vercel

Site d'apprentissage de l'espagnol pour prépa ECG, avec IA live via l'API Anthropic.

---

## 🚀 Déploiement en 5 étapes

### 1. Crée un compte Vercel
→ https://vercel.com (gratuit, connecte-toi avec GitHub)

### 2. Crée un compte GitHub et upload le projet
- Va sur https://github.com/new → crée un repo (ex: `espanol-ecg`)
- Upload tous les fichiers de ce dossier dedans :
  - `api/claude.js`
  - `public/index.html`
  - `vercel.json`
  - `package.json`

### 3. Importe le repo dans Vercel
- Sur Vercel → "Add New Project" → sélectionne ton repo GitHub
- Vercel détecte automatiquement la config via `vercel.json`
- Clique "Deploy"

### 4. Ajoute ta clé API Anthropic
- Dans Vercel → ton projet → "Settings" → "Environment Variables"
- Ajoute :
  - **Name** : `ANTHROPIC_API_KEY`
  - **Value** : ta clé (commence par `sk-ant-...`)
  - Récupère ta clé sur https://console.anthropic.com

### 5. Redéploie
- Vercel → ton projet → "Deployments" → "Redeploy"
- Ton site est en ligne à `https://espanol-ecg.vercel.app` (ou l'URL générée)

---

## 🏗 Structure du projet

```
espanol-ecg/
├── api/
│   └── claude.js       ← Backend sécurisé (clé API jamais exposée)
├── public/
│   └── index.html      ← Site complet
├── vercel.json         ← Config Vercel
└── package.json
```

## ✨ Fonctionnalités IA Live (onglet "IA Live")
- **Générateur de textes** : crée des textes de compréhension sur le thème de ton choix
- **Correcteur** : corrige ta production écrite, la note /20 et explique les erreurs

## 💰 Coût
- Vercel : **gratuit** pour un usage personnel
- API Anthropic : ~0.003$/1000 tokens → quelques centimes par génération
