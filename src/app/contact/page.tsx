"use client";

import { useState } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle } from "lucide-react";

const features = [
  "메인 홈페이지",
  "진료과목 페이지",
  "의료진 소개",
  "예약 연결",
  "관리자 기능",
  "성과 확인",
  "이벤트/랜딩 페이지",
  "기타",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <SiteLayout>
      <PageHero
        title={"병원에 맞는 홈페이지 구조를\n먼저 제안드립니다."}
        description={
          "현재 병원의 상황과 필요한 기능을 알려주세요. DI Web이 진료과목, 병원 규모, 예약 방식에 맞춰 홈페이지 제작 방향을 제안드립니다."
        }
      />

      <Section variant="alt">
        <div className="mx-auto max-w-2xl">
          {submitted ? (
            <div className="rounded-2xl border border-line bg-white p-12 text-center">
              <CheckCircle size={48} className="mx-auto text-accent" />
              <h2 className="mt-4 text-2xl font-bold">상담 문의가 접수되었습니다.</h2>
              <p className="mt-3 text-muted">
                남겨주신 내용을 확인한 뒤, 병원에 필요한 홈페이지 구조와 제작 방향을 안내드립니다.
              </p>
              <Button href="/" variant="outline" className="mt-8">
                홈으로 돌아가기
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-3xl border border-line bg-white p-8 md:p-10 shadow-sm">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="병원명" name="hospital" required />
                <Field label="담당자명" name="name" required />
                <Field label="연락처" name="phone" type="tel" required />
                <Field label="이메일" name="email" type="email" required />
                <Field label="병원 위치" name="location" className="sm:col-span-2" />
                <Field label="진료과목" name="department" className="sm:col-span-2" />
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-foreground">현재 홈페이지 여부</label>
                <div className="mt-2 flex gap-4">
                  {["있음", "없음", "리뉴얼 필요"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 text-sm">
                      <input type="radio" name="hasWebsite" value={opt} className="accent-point-purple" />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-foreground">필요한 기능</label>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {features.map((feat) => (
                    <label key={feat} className="flex items-center gap-2 text-sm">
                      <input type="checkbox" name="features" value={feat} className="accent-point-purple rounded" />
                      {feat}
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <Field label="예상 오픈 시기" name="timeline" />
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  문의 내용
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-line bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-point-purple focus:ring-2 focus:ring-point-purple/20"
                  placeholder="병원 상황과 필요한 기능을 자유롭게 작성해 주세요."
                />
              </div>

              <p className="mt-6 text-sm text-muted">
                남겨주신 내용을 확인한 뒤, 병원에 필요한 홈페이지 구조와 제작 방향을 안내드립니다.
              </p>

              <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
                <Send size={18} className="mr-2" />
                상담 문의 보내기
              </Button>
            </form>
          )}
        </div>
      </Section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-accent ml-0.5">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-line bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-point-purple focus:ring-2 focus:ring-point-purple/20"
      />
    </div>
  );
}
