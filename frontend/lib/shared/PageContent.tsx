import { AmbientColor } from '@/components/decorations/ambient-color';
import DynamicZoneManager from '@/components/dynamic-zone/manager';

export default function PageContent({ pageData }: { pageData: any }) {
  const dynamicZone = pageData?.dynamic_zone;
  // overflow-x-clip (nem overflow-hidden): vízszintesen ugyanúgy levág, de a ragadós (sticky) elemeket nem tiltja le
  return (
    <div className="relative w-full overflow-x-clip">
      {/* <AmbientColor /> */}
      {dynamicZone && (
        <DynamicZoneManager
          dynamicZone={dynamicZone}
          locale={pageData.locale}
        />
      )}
    </div>
  );
}
